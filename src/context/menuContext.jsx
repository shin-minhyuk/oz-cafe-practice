import { createContext, useContext, useState } from "react";
import data from "../assets/data";

// 컨텍스트 생성
// const someContext = createContext("최후의 수단 기본값")

// const basicValue = useContext(someContext) // => "최후의 수단 기본값"

// console.log(basicValue) // => "최후의 수단 기본값"

// // 하지만 기본값은 절대로 변하지 않음 === ref
// // 동적으로 사용될 수 없음. 동적으로 사용하려면? 기본값으로 => 상태값, 상태변경함수를 받아와야함

// const mutableContext = createContext()

// export const MutableProvider = ({children}) => {
//   const [mutable, setMutable] = useState(0)

//   return (
//     <mutableContext.Provider value={[mutable, setMutable]}>
//       {children}
//     </mutableContext.Provider>
//   )
// }

// react 공식 문서에서는 context 폴더 내부의 파일에서 전역 상태의 초기값만 정의해놓음
/**
 * 강의 영상:
 * 1. 전역 상태의 기본값 (createContext) 정의
 * 2. 기본값을 토대로 컴포넌트를 생성, 상태, 상태변경함수를 생성하고
 * 3. 리턴값으로 provider를 사용해서 사용할 위치를 정의합니다.
 * 4. provider의 value로 스코프 내의 상태를 넣어주고
 * 5. 함수의 인자를 provider 내부에 넣어줍니다.
 * 6. mutableProvider()
 */

const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(data.menu);

  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(menuContext);
};
