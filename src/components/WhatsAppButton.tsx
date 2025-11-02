import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = '+2348113339191';
  const message = 'Hello! I would like to discuss a project.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.24C16.4 15.84 15.44 16.36 14.72 16.48C14.24 16.56 13.6 16.64 11.12 15.6C8.08 14.32 6.16 11.2 6 11.04C5.84 10.88 4.64 9.28 4.64 7.6C4.64 5.92 5.52 5.12 5.84 4.8C6.16 4.48 6.48 4.4 6.72 4.4C6.96 4.4 7.2 4.4 7.36 4.4C7.52 4.4 7.76 4.32 8 5.04C8.24 5.76 8.96 7.44 9.04 7.6C9.12 7.76 9.2 7.92 9.04 8.16C8.88 8.4 8.8 8.56 8.64 8.72C8.48 8.88 8.32 9.12 8.16 9.28C8 9.44 7.84 9.6 8 9.92C8.16 10.24 8.96 11.44 10.08 12.44C11.52 13.76 12.72 14.16 13.04 14.32C13.36 14.48 13.52 14.48 13.76 14.24C14 14 14.64 13.28 14.88 12.96C15.12 12.64 15.36 12.72 15.68 12.84C16 12.96 17.68 13.8 18 13.96C18.32 14.12 18.48 14.2 18.56 14.36C18.64 14.52 18.64 15.08 18.32 15.72L16.64 15.24Z"
        />
      </svg>
    </motion.a>
  );
};


export default WhatsAppButton;
