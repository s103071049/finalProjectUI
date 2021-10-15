import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD, CartButton } from "../Style/style.js";

const Dessert = styled.div`
  display: flex;
  width: 20%;
  & + & {
    margin-left: 2%;
  }
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    width: 50%;
    padding: 2%;
    & + & {
      margin-left: 0%;
    }
  }
  ${MEDIA_QUERY_SD} {
    & + & {
      margin-left: 0%;
    }
  }
`;
const DessertImg = styled.div`
  width: 100%;
  height: 0;
  background: url(${(props) => props.imgUrl});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;
const DessertName = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  color: #a96360;
`;
const DessertPrice = styled.div`
  margin-top: 4px;
  text-align: center;
  color: #a96360;
  margin-bottom: 8px;
`;
const Img = styled.div``;
function Item({ dessert }) {
  return (
    <Dessert>
      <Img>
        <DessertImg imgUrl={dessert.imgUrl} />
      </Img>
      <DessertName>{dessert.name}</DessertName>
      <DessertPrice>NT${dessert.price}</DessertPrice>
      <CartButton>加入購物車</CartButton>
    </Dessert>
  );
}

export default Item;
