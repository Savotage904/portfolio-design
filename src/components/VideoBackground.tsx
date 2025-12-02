export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Overlay scuro per leggere meglio il testo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}