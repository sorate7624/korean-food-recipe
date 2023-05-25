import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

export const ScrollTop = () => {
  const handleScrollTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FontAwesomeIcon
      icon={faCircleUp}
      size="3x"
      className="fixed bottom-7 right-5 text-korean-yellow cursor-pointer z-20 hover:text-korean-red"
      onClick={handleScrollTopClick}
    />
  );
};
