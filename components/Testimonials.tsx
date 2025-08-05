import React from "react";

const testimonials = [
	{
		name: "Lucía G.",
		text: "El mejor café de la ciudad, y el ambiente es simplemente encantador. ¡Volveré seguro!",
	},
	{
		name: "Carlos M.",
		text: "La atención es excelente y los postres son deliciosos. Recomiendo el V60.",
	},
	{
		name: "Marta S.",
		text: "Un lugar perfecto para relajarse y disfrutar de un café de calidad.",
	},
];

const colors = ["#b08b5e", "#7c4d2b", "#e6d3c4"];

const Testimonials = () => (
	<section id="testimonios" style={{ background: "none", boxShadow: "none" }}>
		<style>{`
      .testi-card {
        animation: testiFadeIn 1.2s cubic-bezier(.77,0,.18,1) both;
      }
      .testi-card:nth-child(1) { animation-delay: 0.1s;}
      .testi-card:nth-child(2) { animation-delay: 0.2s;}
      .testi-card:nth-child(3) { animation-delay: 0.3s;}
      @keyframes testiFadeIn {
        0% { opacity: 0; transform: translateY(40px) scale(0.97);}
        100% { opacity: 1; transform: translateY(0) scale(1);}
      }
      .testi-avatar-anim {
        animation: testiAvatarAnim 1.8s infinite alternate;
      }
      @keyframes testiAvatarAnim {
        0% { transform: scale(1) rotate(-6deg);}
        100% { transform: scale(1.13) rotate(6deg);}
      }
      .testi-shine {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(120deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0.18) 100%);
        pointer-events: none;
        border-radius: 24px;
        animation: testiShineAnim 3.5s linear infinite alternate;
      }
      @keyframes testiShineAnim {
        0% { opacity: 0.13;}
        100% { opacity: 0.22;}
      }
    `}</style>
		<h2
			style={{
				textAlign: "center",
				color: "#7c4d2b",
				fontSize: "2.7rem",
				fontWeight: 900,
				marginBottom: "2.5rem",
				letterSpacing: "1.5px",
				textShadow: "0 2px 12px #e6d3c4",
			}}
		>
			Testimonios
		</h2>
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				gap: "2.5rem",
				flexWrap: "wrap",
			}}
		>
			{testimonials.map((t, idx) => (
				<div
					key={idx}
					className="testi-card"
					style={{
						background: "rgba(255,255,255,0.85)",
						borderRadius: "24px",
						boxShadow: "0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e",
						padding: "2.2rem 2.5rem",
						minWidth: 260,
						maxWidth: 320,
						textAlign: "center",
						position: "relative",
						transition: "transform 0.18s, box-shadow 0.18s",
						cursor: "pointer",
						overflow: "hidden",
					}}
					onMouseOver={(e) => {
						(e.currentTarget as HTMLDivElement).style.transform =
							"scale(1.05) rotateZ(1.5deg)";
						(e.currentTarget as HTMLDivElement).style.boxShadow =
							"0 8px 40px #b08b5e";
					}}
					onMouseOut={(e) => {
						(e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
						(e.currentTarget as HTMLDivElement).style.boxShadow =
							"0 4px 24px #e6d3c4, 0 1.5px 8px #b08b5e";
					}}
				>
					<div
						className="testi-avatar-anim"
						style={{
							width: 54,
							height: 54,
							borderRadius: "50%",
							background: `linear-gradient(135deg, ${colors[idx % colors.length]} 0%, #fff 100%)`,
							margin: "0 auto 1.1rem auto",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 900,
							fontSize: "1.7rem",
							color: "#fff",
							boxShadow: "0 2px 8px #e6d3c4",
						}}
					>
						{t.name[0]}
					</div>
					<p
						style={{
							color: "#5e3c1c",
							fontStyle: "italic",
							marginBottom: "1.2rem",
							fontWeight: 500,
							fontSize: "1.08rem",
						}}
					>
						"{t.text}"
					</p>
					<span
						style={{
							color: "#7c4d2b",
							fontWeight: 800,
							letterSpacing: "1px",
						}}
					>
						{t.name}
					</span>
					<div className="testi-shine"></div>
				</div>
			))}
		</div>
	</section>
);

export default Testimonials;
