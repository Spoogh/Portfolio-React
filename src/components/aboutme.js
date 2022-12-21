import Card from 'react-bootstrap/Card';
//add upper margin to the card          c
function Aboutme() {
  return (
    <>
      {[
        
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '70rem', height:'30rem', margin: '1rem' }}
          className="mb-2 "
        >
          <Card.Header>About Me</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Aboutme;