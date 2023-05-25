import { useState, useEffect } from 'react';

export const Filter = ({ onFilteredDataChange, initButton }) => {
  const [method, setMethod] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  const showFilterButton = async () => {
    try {
      const response = await fetch('./recipe.json');
      const data = await response.json();
      const filteredResults = [
        ...new Set(data.COOKRCP01.row.map((recipe) => recipe.RCP_PAT2)),
      ];

      setMethod(filteredResults);
      setAllData(data.COOKRCP01.row);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showFilterButton();
  }, []);

  useEffect(() => {
    setSelectedButton(null);
  }, [initButton]);

  const handleScrollTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleButtonClick = (item) => {
    const filteredItems = allData.filter((recipe) => recipe.RCP_PAT2 === item);
    onFilteredDataChange(filteredItems, '');
    setSelectedButton(item);
    handleScrollTopClick();
  };

  return (
    <>
      <div className="w-full mt-5">
        {method.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item)}
            className={`text-white font-semibold rounded-xl bg-gradient-to-r from-[#0BA3AB] to-[#333C7A] mr-2 mb-2 ease-out duration-300 border-4 border-white hover:border-[#0BA3AB] hover:bg-none hover:text-korean-teal hover:border-[#0BA3AB] 
            ${
              selectedButton === item
                ? 'bg-none !border-[#0BA3AB] !text-korean-teal'
                : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
