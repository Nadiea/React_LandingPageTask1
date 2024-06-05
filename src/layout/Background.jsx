import vectorImage from '../assets/image/vector.jpg';

const Background = () => {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${vectorImage})`, 
        backgroundRepeat: 'repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh', 
        width: '100%' 
      }} 
      aria-label="background"
    >
    </div>
  );
}

export default Background;
