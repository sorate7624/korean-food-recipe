import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTop } from './ScrollTop';
import { Filter } from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';

export const Header = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [initButton, setInitButton] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }
    onSearchTermChange(searchTerm);
    setInitButton((prevInitButton) => !prevInitButton);
    handleScrollTopClick();
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
    setSearchTerm('');
    onSearchTermChange('');
    setInitButton((prevInitButton) => !prevInitButton);
  };

  const handleFilteredDataChange = (data, searchTerm) => {
    setSearchTerm('');
    onSearchTermChange(data);
  };

  return (
    <>
      <div
        className={`
        ${isMobile ? `relative px-0` : `fixed px-8`}
        top-0 left-1/2 translate-x-[-50%] w-full h-auto z-20 pt-[50px] pb-[15px] ${
          showScrollTop && `bg-white/80`
        }
        `}
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
        />
      </div>
      {showScrollTop && <ScrollTop />}
    </>
  );
};
