import React from 'react'
import { createContext } from 'react'
import Button from './Button';

const ThemeContext = createContext();

function Theme() {

  const [theme,setTheme] = useState('light')
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Button />
        </ThemeContext.Provider>

    </div>
  )
}

export default Theme
export {ThemeContext}