import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Feather, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
	{
		title: 'We make ideas visible',
		copy: 'Concept-first visuals that communicate strategy and heart.',
		icon: <Feather size={18} className="text-amber-500" />,
	},
	{
		title: 'Crafted with intent',
		copy: 'Every shoot, frame and edit is chosen to serve the idea — not the other way around.',
		icon: <Star size={18} className="text-indigo-500" />,
	},
	{
		title: 'Built for impact',
		copy: 'We design visuals that hold up across campaigns, screens and printed media.',
		icon: <Globe size={18} className="text-pink-500" />,
	},
];

const WhoWeAre: React.FC = () => {
	return (
		<section id="who-we-are" className="py-20 bg-white w-full overflow-hidden">
			<div className="w-full">
				{/* Header / Hero */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 px-6 max-w-[1400px] mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
							We shape visual stories that stand apart
						</h2>
						<p className="text-lg text-gray-600">
							A studio blending photography, craft and design to create elegant, memorable visuals 
							for brands that care about detail and feeling.
						</p>

						<div className="flex items-center gap-4 mt-4">
							<Link
								to="/contact"
								className="inline-flex items-center gap-3 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-black hover:text-white border border-gray-800 transition-colors"
							>
								Start your project
								<ArrowRight size={16} />
							</Link>
							<Link to="/portfolio" className="text-sm text-gray-700 underline">
								View portfolio
							</Link>
						</div>
					</motion.div>

					<motion.figure
						initial={{ opacity: 0, scale: 0.98 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-64"
					>
						<img
							src="/assets/whatwedo.jpg"
							alt="Artistic composition of studio work"
							className="w-full h-full object-cover"
						/>
					</motion.figure>
				</div>

				{/* Highlights */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-6 max-w-[1400px] mx-auto">
					{highlights.map((h) => (
						<motion.div
							key={h.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
						>
							<div className="flex items-start gap-4">
								<div className="mt-1">{h.icon}</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-900">{h.title}</h4>
									<p className="text-sm text-gray-600 mt-2">{h.copy}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Decorative mosaic */}
				<div className="grid grid-cols-2 gap-4 mb-10 w-full justify-center px-6 sm:px-10 lg:px-20 max-w-3xl mx-auto">
  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/assets/photo1.jpg"
      alt=""
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/assets/pot2.JPG"
      alt=""
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/assets/pot1.JPG"
      alt=""
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/assets/photo4.jpg"
      alt=""
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>




				<div className="text-center mt-6 px-6">
					<a
						href="#contact"
						className="inline-flex items-center gap-3 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
					>
						Let&apos;s collaborate
						<ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
