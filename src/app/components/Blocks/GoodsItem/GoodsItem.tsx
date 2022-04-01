import { FC } from 'react';
import { IGoodItem } from './IGoodItem';
import {
  StyledDiscountSticker,
  StyledGoodsItem,
  StyledGoodsItemBlack,
  StyledGoodsItemContentWrapper,
  StyledGoodsItemDesc,
  StyledGoodsItemFavorite,
  StyledGoodsItemFavoriteIcon,
  StyledGoodsItemPhoto,
  StyledGoodsItemPrice,
  StyledGoodsItemPriceWrapper,
  StyledGoodsItemTitle,
  StyledGoodsItemWhite,
  StyledHitSticker,
} from './StyledGoodsItem';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';

const GoodsItem: FC<IGoodItem> = ({
  title,
  desc,
  price,
  favorite,
  discount,
  hit,
}) => {
  return (
    <StyledGoodsItem>
      {discount.length > 0 && (
        <StyledDiscountSticker>Скидка {discount}</StyledDiscountSticker>
      )}
      {hit && <StyledHitSticker>Хит продаж</StyledHitSticker>}
      <StyledGoodsItemContentWrapper>
        <StyledGoodsItemPhoto />
        <StyledGoodsItemTitle>{title}</StyledGoodsItemTitle>
        <StyledGoodsItemDesc>{desc}</StyledGoodsItemDesc>
      </StyledGoodsItemContentWrapper>
      <StyledGoodsItemPriceWrapper>
        <StyledGoodsItemPrice>
          <StyledGoodsItemBlack>Купить за</StyledGoodsItemBlack>
          <br />
          <StyledGoodsItemWhite>{price}</StyledGoodsItemWhite>
        </StyledGoodsItemPrice>
        <StyledGoodsItemFavorite>
          <StyledGoodsItemFavoriteIcon src={favoriteIcon} alt="Сердце" />
        </StyledGoodsItemFavorite>
      </StyledGoodsItemPriceWrapper>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
