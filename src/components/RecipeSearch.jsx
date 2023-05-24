import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';
import { Filter } from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ScrollTop } from './ScrollTop';

export const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [initButton, setInitButton] = useState(false);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      return;
    }

    try {
      const response = await fetch('./recipe.json');
      const data = await response.json();

      const filteredResults = data.COOKRCP01.row.filter((recipe) =>
        recipe.RCP_NM.includes(searchTerm)
      );

      if (filteredResults.length === 0) {
        setShowMessage(true);
      } else {
        setSearchResults(filteredResults);
        setShowMessage(false);
        setInitButton((prevInitButton) => !prevInitButton);
      }
      setFilteredData([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = () => {
    handleScrollTopClick();
    setShowMessage(false);
    setSearchTerm('');
    setSearchResults([]);
    setFilteredData([]);
    setInitButton((prevInitButton) => !prevInitButton);
  };

  const handleFilteredDataChange = (data, searchTerm) => {
    setFilteredData(data);
    setSearchTerm(searchTerm);
    setSearchResults([]);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-1/2 translate-x-[-50%] w-full h-auto z-20 pt-[50px] px-8 pb-[15px] ${
          showScrollTop && `bg-white/80`
        }`}
      >
        <h1 className="font-bold text-5xl mb-9 sm:text-6xl">
          <Link
            onClick={handleLinkClick}
            className="text-korean-blue hover:text-korean-blue"
          >
            한식이 좋아
          </Link>
        </h1>
        <div className="flex max-w-lg bg-white h-12 rounded-full px-5 border-4 border-[#333C7A] items-center justify-between mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="음식을 입력하세요"
            className="w-full h-full bg-white outline-0 font-medium text-slate-950 focus:placeholder-transparent "
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            onClick={handleSearch}
            className="text-korean-blue"
          />
        </div>
        <Filter
          onFilteredDataChange={handleFilteredDataChange}
          initButton={initButton}
          setShowMessage={setShowMessage}
        />
      </div>
      {showMessage ? (
        <p className="text-center font-medium text-xl mt-64 text-korean-red">
          해당되는 레시피가 없습니다.
        </p>
      ) : (
        <div className="flex flex-wrap justify-evenly mt-64 mb-48">
          {searchResults.map((recipe) => (
            <RecipeCard key={recipe.RCP_SEQ} recipe={recipe} />
          ))}
          {filteredData.map((recipe) => (
            <RecipeCard key={recipe.RCP_SEQ} recipe={recipe} />
          ))}
        </div>
      )}
      {showScrollTop && <ScrollTop />}
    </>
  );
};
