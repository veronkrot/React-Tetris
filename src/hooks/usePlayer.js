import {useCallback, useState} from 'react';
import {TETROMINOES, randomTetrominoes} from "../tetrominoes";
import {STAGE_WIDTH} from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOES[0].shape,
        collided: false,
    });

    const updatePlaerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetrominoes().shape,
            collided: false,
        })
    });

    return [player, updatePlaerPos, resetPlayer];
};
