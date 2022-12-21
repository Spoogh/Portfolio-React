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
            <Card.Title><h2> About me!</h2> </Card.Title>
            <Card.Text>
            I'm a creative full-stack developer and multi-hyphenate who loves learning and creating new things.

            The experience a person has using any media should be easy, enjoyable, and sometimes even surprising.

            Thanks for stopping by and please reach out to say hello.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Aboutme;