// ========== import needed packages ==========
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


interface IndexProps {
  Text: string;
  buttonText: string;
}

const Index: React.FC<IndexProps> = ({ Text,buttonText }) => {
  const location = useLocation();
  return (
    <header className="sm:m-[80px] m-[40px]  mb-[0px]">
      <ul className="flex flex-row-reverse items-center">
        <li className="ml-auto bg-clip-text bg-gradient-to-r text-HS sm:text-HL from-[#118C80] to-[#4AB7D8] font-extra-bold text-transparent">
          کوئرا تسک منیجر
        </li>
        <li>{Text}</li>
        <li>
          <Link to={location.pathname === '/signup' ? '/' : '/signup'}>
            <button className="bg-[#208D8E] mr-2 w-[95px] text-TS font-extra-bold text-[#FFFFFF] px-[26px] py-[8px] rounded-md hover:bg-teal-700">
              {buttonText}
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Index;
