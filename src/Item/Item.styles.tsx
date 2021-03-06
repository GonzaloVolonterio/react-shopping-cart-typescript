import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onclick={() => handleAddCart({ item })}>Add to cart</Button>
  </Wrapper>
);

export default Item;