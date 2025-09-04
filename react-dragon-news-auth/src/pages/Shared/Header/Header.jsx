import moment from 'moment';


const Header = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto' src="/logo.png" alt="logo" />
      <p className="text-lg mt-5">Journalism Without Fear or Favour</p>
      <p className="text-2xl mt-3">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
