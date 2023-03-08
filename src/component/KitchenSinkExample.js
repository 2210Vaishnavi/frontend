import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import akshay1 from '../component/Images/akshay.jpg'
function KitchenSinkExample() {
  const cards = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/300x150',
    },
  ];

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={akshay1} />
      <center> <Card.Title className='mt-2'>Raundal</Card.Title></center>

      <Card.Body className='mt-2'>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;