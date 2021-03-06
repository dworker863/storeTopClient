import { FC, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../Blocks/Container/Container';
import { IGoodPage } from './IGoodPage';
import {
  StyledCategoryGoodsTitle,
  StyledCategoryGoodsWrapper,
  StyledCharacteristicsItem,
  StyledCharacteristicsTitle,
  StyledGoodBtnWrapper,
  StyledGoodCount,
  StyledGoodCountChanger,
  StyledGoodCounterWrapper,
  StyledGoodInfo,
  StyledGoodInfoWrapper,
  StyledGoodPage,
  StyledGoodPageDesc,
  StyledGoodPageDiscountPrice,
  StyledGoodPagePrice,
  StyledGoodPageSubTitle,
  StyledGoodRating,
  StyledGoodRatingIconsWrapper,
  StyledGoodRatingText,
  StyledGoodRatingTextBig,
  StyledGoodSerialWrapper,
  StyledGoodSticker,
  StyledGoodStock,
  StyledGoodSubTitle,
} from './StyledGoodPage';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import Image from '../../Blocks/Image/Image';
import { StyledBlockLine } from '../../../commonStyles/StyledBlockLine';
import Button from '../../Elements/Button/Button';
import ratingIcon from '../../../../assets/images/rating-grey-icon.png';
import ratingPrimaryIcon from '../../../../assets/images/rating-primary-icon.png';
import {
  setCartGoodCount,
  setGoodCart,
} from '../../../redux/reducers/cart/cartReducer';
import GoodPageItem from '../../Blocks/GoodPageItem/GoodPageItem';
import Rating from 'react-rating';
import { calculateRating } from '../../../commonFunctions/commonFunctions';
import { setGoodRating } from '../../../redux/reducers/goods/goodsReducer';
import {
  removeFavoriteGood,
  setFavoriteGood,
  setViewedGood,
} from '../../../redux/reducers/users/usersReducer';
import { useAppDispatch } from '../../../hooks';
import { useDispatch } from 'react-redux';

const GoodPage: FC<IGoodPage> = ({ goods, cart, user, ratingHandler }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 800px)').matches,
  );

  const { goodName } = useParams();
  // const unauthorizedModalHandler = useContext(UnauthorizedModalContext);
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const goodsArr = [...goods.electronics, ...goods.cosmetics];
  const [good] = goodsArr.filter((good) => good.name === goodName);
  const category = goods.electronics.some(
    (electronic) => electronic.name === goodName,
  )
    ? 'electronics'
    : 'cosmetics';

  const goodRating = calculateRating(good?.rating);

  console.log(goodRating);

  const [goodCount, setGoodCount] = useState(0);

  useEffect(() => {
    window
      .matchMedia('(min-width: 800px)')
      .addEventListener('change', (e) => setMatches(e.matches));

    dispatch(setViewedGood(user?.email, good?.name));
  }, [good?.name]);

  const decrementGoodsCount = () => {
    goodCount > 0 && setGoodCount(goodCount - 1);
  };

  const incrementGoodsCount = () => {
    setGoodCount(goodCount + 1);
  };

  const removeFromFavoriteClickHandler = (userId: string, goodName: string) => {
    dispatch(removeFavoriteGood(userId, goodName));
  };

  const addToFavoriteClickHandler = (userId: string, goodName: string) => {
    dispatch(setFavoriteGood(userId, goodName));
  };

  const addToCartClickHandler = () => {
    if (!cart.goods.some((goodItem) => goodItem.name === good.name)) {
      dispatch(
        setGoodCart({
          name: good.name,
          description: good.description,
          characteristics: good.characteristics,
          country: good.country,
          price: good.price,
          discount: good.discount,
          hit: good.hit,
          image: good.image,
          rating: goodRating,
          buysCount: good.buysCount,
          goodsCount: goodCount > 0 ? goodCount : 1,
        }),
      );
    } else {
      dispatch(
        setCartGoodCount(
          {
            name: good.name,
            description: good.description,
            characteristics: good.characteristics,
            country: good.country,
            price: good.price,
            discount: good.discount,
            hit: good.hit,
            image: good.image,
            rating: goodRating,
            buysCount: good.buysCount,
            goodsCount: 0,
          },
          goodCount > 0
            ? goodCount +
                cart.goods.filter((goodItem) => goodItem.name === good.name)[0]
                  .goodsCount
            : cart.goods.filter((goodItem) => goodItem.name === good.name)[0]
                .goodsCount + 1,
        ),
      );
    }
  };

  return (
    <Container type="common">
      <StyledGoodPage>
        <SectionTitle text={good?.name} primary={false} />
        <StyledGoodInfoWrapper>
          {good?.discount.length > 0 && (
            <StyledGoodSticker mode="discount">
              ???????????? {good.discount}
            </StyledGoodSticker>
          )}
          {good?.hit && (
            <StyledGoodSticker mode="hit">?????? ????????????</StyledGoodSticker>
          )}
          <div>
            <Image mode="good" buttonMode="between" image={good?.image} />
            <StyledGoodRating>
              <StyledGoodRatingIconsWrapper>
                <Rating
                  emptySymbol={<img src={ratingIcon} className="icon" />}
                  fullSymbol={<img src={ratingPrimaryIcon} className="icon" />}
                  initialRating={goodRating || 5}
                  onClick={(value) => {
                    user
                      ? appDispatch(
                          setGoodRating(value, good.id, category, user.email),
                        )
                          .then((res) => console.log('?????????????? ???? ?????? ??????????'))
                          .catch((e) =>
                            ratingHandler(
                              true,
                              '???? ?????? ?????????????? ?????????????? ?????????? ????????????',
                            ),
                          )
                      : ratingHandler(
                          true,
                          '???????????? ???????????????????????????? ???????????????????????? ?????????? ???????????????? ?????????????? ????????????',
                        );
                  }}
                />
              </StyledGoodRatingIconsWrapper>
              <StyledGoodSubTitle>?????????????? ????????????:</StyledGoodSubTitle>
              <StyledGoodRatingText>
                <StyledGoodRatingTextBig>
                  {goodRating || 5}
                </StyledGoodRatingTextBig>
                /5
              </StyledGoodRatingText>{' '}
              (??????????????)
            </StyledGoodRating>
          </div>
          <StyledGoodInfo>
            <SectionTitle text={good?.name} primary={false} />
            <StyledGoodSerialWrapper>
              <StyledGoodSubTitle>???????????????? ??????????: </StyledGoodSubTitle>
              <span>000001</span>
              <StyledGoodStock>?? ??????????????</StyledGoodStock>
            </StyledGoodSerialWrapper>
            <StyledGoodPageSubTitle>???????????????? ????????????</StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good?.description}</StyledGoodPageDesc>
            <StyledBlockLine></StyledBlockLine>
            <StyledGoodPageSubTitle>
              ???????????????????????????? ????????????
            </StyledGoodPageSubTitle>
            <StyledGoodPageDesc>{good?.characteristics}</StyledGoodPageDesc>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>????????????:</StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>
                ?????????????????????? ????????????????????????????:
              </StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledCharacteristicsItem>
              <StyledCharacteristicsTitle>
                ????????????-??????????????????????????:
              </StyledCharacteristicsTitle>
              {` ${good?.country}`}
            </StyledCharacteristicsItem>
            <StyledBlockLine></StyledBlockLine>
            <StyledGoodPageSubTitle>?????????????????? ????????????????</StyledGoodPageSubTitle>
            {good?.discount.length === 0 ? (
              <StyledGoodPageDiscountPrice>
                {`${good?.price} ????.`}
              </StyledGoodPageDiscountPrice>
            ) : (
              <>
                <StyledGoodPagePrice>{`${good?.price} ????.`}</StyledGoodPagePrice>
                <StyledGoodPageDiscountPrice>
                  {Number(good?.price) -
                    Number(good?.price) *
                      (Number(good?.discount.slice(0, -1)) / 100) +
                    ' ????.'}
                </StyledGoodPageDiscountPrice>
              </>
            )}
            {/* <StyledBlockLine></StyledBlockLine> */}
            <StyledGoodBtnWrapper>
              <StyledGoodCounterWrapper>
                <StyledGoodCount>{`${goodCount}????.`}</StyledGoodCount>
                <StyledGoodCountChanger onClick={decrementGoodsCount}>
                  -
                </StyledGoodCountChanger>
                <StyledGoodCountChanger onClick={incrementGoodsCount}>
                  +
                </StyledGoodCountChanger>
              </StyledGoodCounterWrapper>
              <Button
                text={matches ? '???????????????? ?? ??????????????' : ''}
                clickHandler={addToCartClickHandler}
                mode="good"
              />
              <Button
                text={matches ? '???????????????? ?? ???????????? ??????????????' : ''}
                clickHandler={
                  user &&
                  user.favorites?.some((goodName) => goodName === good.name)
                    ? () =>
                        removeFromFavoriteClickHandler(
                          String(user.id),
                          good.name,
                        )
                    : () => {
                        user
                          ? addToFavoriteClickHandler(
                              String(user.id),
                              good.name,
                            )
                          : ratingHandler(
                              true,
                              '???????????? ???????????????????????????? ???????????????????????? ?????????? ?????????????????? ???????????? ?? ??????????????????',
                            );
                      }
                }
                mode="favorite"
                favorite={
                  user?.favorites?.some((goodName) => goodName === good.name)
                    ? true
                    : false
                }
              />
            </StyledGoodBtnWrapper>
          </StyledGoodInfo>
        </StyledGoodInfoWrapper>
        <StyledCategoryGoodsTitle>
          {`???????????? ???????????????? ???? ?????????????????? ${
            category[0].toUpperCase() + category.slice(1)
          }`}
        </StyledCategoryGoodsTitle>
        <StyledCategoryGoodsWrapper>
          {goodsArr.slice(0, 5).map((good, index) => (
            <Link key={good.name + index} to={`/goods/${good.name}`}>
              <GoodPageItem
                photo={good.image}
                name={good.name}
                desc={good.description}
              />
            </Link>
          ))}
        </StyledCategoryGoodsWrapper>
        <div style={{ height: '20vh' }}></div>
      </StyledGoodPage>
    </Container>
  );
};

export default GoodPage;
