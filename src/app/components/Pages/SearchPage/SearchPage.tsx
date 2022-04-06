import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { StyledGoodsWrapper } from '../../Elements/GoodsWrapper/StyledGoodsWrapper';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ISearchPage } from './ISearchPage';
import { StyledSearchPage } from './StyledSearchPage';

const SearchPage: FC<ISearchPage> = ({ goods }) => {
  return (
    <Container type="common">
      <StyledSearchPage>
        <SectionTitle text="SearchPage" primary={false} />
        <StyledGoodsWrapper>
          {goods.map((good) => (
            <GoodsItem
              title={good.name}
              desc={good.description}
              price={good.price}
              favorite={false}
              discount={good.discount}
              hit={good.hit}
            />
          ))}
        </StyledGoodsWrapper>
      </StyledSearchPage>
    </Container>
  );
};

export default SearchPage;