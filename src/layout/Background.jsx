

const Background = () => {
  return (
    <div 
      style={{ 
        backgroundImage: `url("/src/assets/image/vector.jpg")`, 
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
