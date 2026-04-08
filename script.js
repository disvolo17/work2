const { useState, useEffect } = React;
const { motion, AnimatePresence } = FramerMotion;

const GooeyNav = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative flex items-center bg-white/5 rounded-full p-1 border border-white/10 gooey-container">
            {/* Анимированный оранжевый фон (пузырь) */}
            <motion.div 
                className="absolute bg-orange-500 rounded-full h-[80%] z-0"
                layoutId="gooey-pill"
                transition={{ 
                    type: "spring", 
                    stiffness: 160, 
                    damping: 22,
                    mass: 1 
                }}
                style={{
                    width: `calc(100% / ${items.length} - 8px)`,
                    left: `calc(${activeIndex} * (100% / ${items.length}) + 4px)`
                }}
            />
            
            {/* Пункты меню */}
            {items.map((item, i) => (
                <a
                    key={i}
                    href={item.href}
                    onClick={() => setActiveIndex(i)}
                    className={`relative z-10 px-4 md:px-8 py-2 text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 w-full text-center ${
                        activeIndex === i ? 'text-black font-bold' : 'text-white/70 hover:text-white'
                    }`}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

const Navigation = () => {
    const menuItems = [
        { label: "Навыки", href: "#skills" },
        { label: "Опыт", href: "#experience" },
        { label: "База", href: "#education" },
        { label: "TG", href: "https://t.me/disvolo" }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/10">
            <div className="font-mono text-sm md:text-lg tracking-[0.3em] uppercase font-black text-white">
                Денис Волошин
            </div>
            
            {/* Gooey Menu для десктопа и планшетов */}
            <div className="hidden md:block">
                <GooeyNav items={menuItems} />
            </div>

            {/* TG кнопка для мобилок */}
            <div className="md:hidden">
                <a href="https://t.me/disvolo" className="bg-white text-black px-4 py-1.5 font-bold rounded-sm text-[10px] uppercase font-mono">TG</a>
            </div>
        </nav>
    );
};

// Запуск рендера
const root = ReactDOM.createRoot(document.getElementById('nav-root'));
root.render(<Navigation />);
