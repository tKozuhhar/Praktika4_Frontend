import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

export default function CountryList({ countries }) { // принимает массив countries как свойства
    return ( // возвращаем JSX — список стран
        <List>
            {countries.map((country) => ( // хранилище для списка
                <ListItem // работает как кнопка и ссылка
                key={country.cca3} // уникальный ключ для React (нужен для оптимизации)
                button
                component={Link}
                to={`/country/${country.cca3}`}> {/*проходим по массиву countries и создаём элемент списка для каждой страны*/}
                    <ListItemText 
                        primary={country.name.common} // название страны
                        sx={{ color: 'black' }} // цвет текста черный
                    />
            </ListItem>
            ))}
        </List>
    );
}