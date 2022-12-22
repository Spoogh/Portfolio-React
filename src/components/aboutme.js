import Card from 'react-bootstrap/Card';
import '../index.css';
//add upper margin to the card          c
function Aboutme() {
  return (
    <>
      {[
        
        'Dark',
      ].map((variant) => (
        <Card
          // bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '70rem', height:'30rem', margin: '1rem' }}
          className="mb-2 dark shadow "
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title><h2> About me</h2> </Card.Title>
            <Card.Text>
            <p>I'm a full-stack developer, former mechanic and US Airman. I just graduated from the UTA Full Stack Flex Coding Bootcamp!.</p>
            <p>I love learning new things and I'm good at adapting to new environments</p>
            <p>I'm Based in Round Rock, Texas. willing to relocate! </p>
            <p className="mb-5">Thanks for stopping by and please reach out to say hello.</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Aboutme;