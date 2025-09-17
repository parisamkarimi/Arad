import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./requestPro.css";

export default function RequestForm() {
  const navigate = useNavigate();

  // ---------------- State ----------------
  const [form, setForm] = useState({
    prefix: "Mr.",
    first: "",
    last: "",
    email: "",
    phone: "",
    requestType: "Referral Form",
    message: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const [files, setFiles] = useState([]);
  const dropRef = useRef(null);

  // Signature pad
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [sigDataUrl, setSigDataUrl] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ---------- Files: add, de-dupe, remove, clear ----------
  const handleFiles = (fileList) => {
    const incoming = Array.from(fileList || []);
    setFiles((prev) => {
      const merged = [...prev, ...incoming];
      const seen = new Set();
      return merged.filter((f) => {
        const key = `${f.name}-${f.size}-${f.lastModified}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    });
  };
  const removeFile = (index) => setFiles((prev) => prev.filter((_, i) => i !== index));
  const clearFiles = () => setFiles([]);

  const onDrop = (e) => {
    e.preventDefault();
    dropRef.current?.classList.remove("highlight");
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    dropRef.current?.classList.add("highlight");
  };
  const onDragLeave = () => dropRef.current?.classList.remove("highlight");

  // ---------------- Signature pad logic ----------------
  // Resize canvas crisply for DPR and container width
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const cssWidth = parent.clientWidth;
    const cssHeight = 180; // visual height in px
    canvas.style.width = cssWidth + "px";
    canvas.style.height = cssHeight + "px";
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    // light background
    ctx.fillStyle = "#fbfdff";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    // hint
    ctx.fillStyle = "rgba(47, 90, 168, .25)";
    ctx.font = "700 20px Segoe Script, 'Lucida Handwriting', cursive";
    ctx.fillText("Sign here", 16, cssHeight - 14);
    // baseline
    ctx.strokeStyle = "rgba(47,90,168,.18)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(12, cssHeight - 10);
    ctx.lineTo(cssWidth - 12, cssHeight - 10);
    ctx.stroke();
    setSigDataUrl("");
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;
    return { x, y };
  };

  const startDraw = (e) => {
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);
    ctx.strokeStyle = "#2f5aa8";
    ctx.lineWidth = 2.4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setSigDataUrl(canvasRef.current.toDataURL("image/png"));
  };

  const clearSignature = () => resizeCanvas();

  // ---------------- Submit ----------------
  const onSubmit = (e) => {
    e.preventDefault();
    // Example payload you can POST later:
    // const payload = { ...form, files, signature: sigDataUrl };
    // await fetch("/api/member-request", { method:"POST", body: JSON.stringify(payload) });
    navigate("/contact-acknowledgement", { state: { type: "Member Request" } });
  };

  return (
    // Pass bg image via CSS var so /public paths work
    <main
      className="rf-page"
      style={{
        "--rf-photo": 'url("/assets/forms/bg.jpg")',
        "--rf-width": "650px",
      }}
    >
      <div className="rf-card">
        <header className="rf-header">
          <h1 className="rf-title">Authorization Form</h1>
          <p className="rf-intro">
            Please complete the form to authorize ARAD to process your request. Upload any supporting files,
            provide your contact details, and confirm your consent with your signature. Your information is
            kept secure and used only to fulfill your request.
          </p>
        </header>

        <hr className="rf-divider" />

        <form onSubmit={onSubmit} className="rf-form">
          {/* Name */}
          <div className="rf-grid rf-g3">
            <label className="rf-field">
              <span className="rf-label">Prefix</span>
              <select className="rf-input rf-select" name="prefix" value={form.prefix} onChange={onChange}>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
                <option>Mx.</option>
              </select>
            </label>
            <label className="rf-field">
              <span className="rf-label">First Name</span>
              <input
                className="rf-input"
                name="first"
                value={form.first}
                onChange={onChange}
                placeholder="First Name"
                required
              />
            </label>
            <label className="rf-field">
              <span className="rf-label">Last Name</span>
              <input
                className="rf-input"
                name="last"
                value={form.last}
                onChange={onChange}
                placeholder="Last Name"
                required
              />
            </label>
          </div>

          {/* Contact */}
          <div className="rf-grid rf-g2">
            <label className="rf-field">
              <span className="rf-label">E-mail</span>
              <input
                className="rf-input with-icon email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@something.com"
                required
              />
            </label>
            <label className="rf-field">
              <span className="rf-label">Phone</span>
              <input
                className="rf-input with-icon phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="(000) 000-0000"
              />
            </label>
          </div>

          {/* Request type & message */}
          <label className="rf-field">
            <span className="rf-label">Request Type</span>
            <select
              className="rf-input rf-select"
              name="requestType"
              value={form.requestType}
              onChange={onChange}
            >
              <option>Referral Form</option>
              <option>License Status Help</option>
              <option>Nevada Business License Help</option>
              <option>Transfer Out</option>
              <option>General Question</option>
            </select>
          </label>

          <label className="rf-field">
            <span className="rf-label">Message (optional)</span>
            <textarea
              className="rf-input rf-textarea"
              rows="4"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us a bit about your request…"
            />
          </label>

          {/* Upload */}
          <div
            ref={dropRef}
            className="rf-upload"
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <input
              id="rf-file"
              type="file"
              multiple
              onChange={(e) => {
                handleFiles(e.target.files);
                e.target.value = ""; // allow re-adding the same file
              }}
              accept="image/*,.pdf"
              style={{ display: "none" }}
            />
            <label htmlFor="rf-file" className="rf-upload-inner">
              <span className="rf-upload-icon" aria-hidden />
              <div className="rf-upload-title">Browse Files</div>
              <div className="rf-upload-sub">Drag and drop files here</div>
              <div className="rf-upload-hint">
                Upload clear images or PDFs of any related documents.
              </div>
            </label>
          </div>

          {files.length > 0 && (
            <div className="rf-files">
              {files.map((f, i) => (
                <div
                  className="rf-file"
                  key={`${f.name}-${f.size}-${f.lastModified}-${i}`}
                  title={f.name}
                >
                  <span className="rf-file-name">{f.name}</span>
                  <button
                    type="button"
                    className="rf-file-remove"
                    aria-label={`Remove ${f.name}`}
                    onClick={() => removeFile(i)}
                  >
                    ×
                  </button>
                </div>
              ))}
              <button type="button" className="rf-file-clear" onClick={clearFiles}>
                Remove all
              </button>
            </div>
          )}

          {/* Signature pad with inline Date */}
          <div className="rf-field">
            <span className="rf-label">Signature (draw inside the box)</span>

            <div className="rf-signature-pad">
              <canvas
                ref={canvasRef}
                className="rf-canvas"
                onPointerDown={startDraw}
                onPointerMove={draw}
                onPointerUp={endDraw}
                onPointerLeave={endDraw}
              />

              <div className="rf-signature-toolbar">
                <label className="rf-date">
                  <span className="visually-hidden">Date</span>
                  <input
                    className="rf-input rf-input-date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                  />
                </label>

                <button type="button" className="rf-btn-outline" onClick={clearSignature}>
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="rf-actions">
            <button className="rf-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
