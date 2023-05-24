import { useState, useEffect } from 'react';

export const Filter = ({ onFilteredDataChange }) => {
  const [method, setMethod] = useState([]);
  const [allData, setAllData] = useState([]);

  const showFilter = async () => {
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
    showFilter();
  }, []);

  const handleButtonClick = (item) => {
    const filteredItems = allData.filter((recipe) => recipe.RCP_PAT2 === item);
    onFilteredDataChange(filteredItems);
  };

  return (
    <>
      <div className="fixed top-[210px] left-0 w-full">
        {method.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item)}
            className="text-white font-semibold rounded-xl  bg-gradient-to-r from-[#0BA3AB] to-[#333C7A] mr-2 mb-2 ease-out duration-300 border-4 border-white hover:border-[#0BA3AB] hover:bg-none hover:text-korean-teal hover:border-[#0BA3AB]"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
