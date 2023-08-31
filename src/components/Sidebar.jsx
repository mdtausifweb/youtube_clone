import React from 'react'
import { Stack } from '@mui/material'
import { categoryes } from "../utils/constants"
const Sidebar = ({ selectedCategory, setSlectedCategory }) => {
    return (
        <Stack direction="row" sx={{
            overflow: "auto", height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" }
        }}>
            {
                categoryes.map((category, i) => {
                    return <button className='category-btn'
                        onClick={() => setSlectedCategory(category.name)}
                        style={{
                            background: category.name === selectedCategory && "#FC!%)#",
                            color: "white"
                        }} key={i}>
                        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{category.Icon}</span>
                        <span
                            style={{
                                opacity: category.name === selectedCategory ? "1" : "0.8"
                            }}
                        >{category.name}</span>
                    </button>
                })
            }
        </Stack>
    )
}

export default Sidebar