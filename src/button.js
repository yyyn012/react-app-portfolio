import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

// style.css 파일을 만들고 import 하거나 function Button 자체에 style={{}}을 만들어 style을 설정하면 모든 버튼이 똑같아진다.
// module.css파일 안에 class를 설정하고 이를 위와 같이 이용하면 원하는 버튼에만 원하는 스타일을 적용시킬 수 있어 더 유용하다.
// console로 보면 create-react-app이 우리가 만든 class이름을 랜덤으로 설정해놓은 것을 볼 수 있다.(각기 다른 클래스 이름을 공들여 설정하거나 기억할 필요가 없음)
// 여기서 만든 class btn은 다른 파일에서도 사용가능하다.
