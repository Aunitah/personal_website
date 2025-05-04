// app/resume/page.tsx
export default function Resume() {
  return (
    <iframe 
      src="/resume_ethanclark.pdf" 
      className="w-screen h-screen"
      style={{ border: 'none' }}
    />
  )
}