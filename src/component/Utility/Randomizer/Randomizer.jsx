import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Randomizer.module.css';
import {
  randomizerActionsSetMax,
  randomizerActionsSetMin,
  randomizerActionsSetResult
} from '../../../store/actionsCreators/randomizerActionsCreater';
import useTheme from '../../../hooks/useTheme';

function Randomizer() {
  const dispatch = useDispatch();
  const genInt = useSelector(state => state.randomizer.genInt);
  const minGen = useSelector(state => state.randomizer.minGen);
  const maxGen = useSelector(state => state.randomizer.maxGen);

  const [colorMode] = useTheme();

  const generate = () => {
    if (!(Number.isFinite(minGen) && Number.isFinite(parseInt(maxGen)))) {
      dispatch(randomizerActionsSetResult('Не верный диапазон'));
      dispatch(randomizerActionsSetMin(0));
      dispatch(randomizerActionsSetMax(100));
      return;
    }

    if (maxGen < minGen) {
      dispatch(randomizerActionsSetResult('Не верный диапазон'));
      return;
    }

    const resultNumber = Math.floor(Math.random() * (maxGen - minGen + 1) + minGen);
    dispatch(randomizerActionsSetResult(resultNumber));
  };

  return (
    <div className={`${cl.random_gen} ${colorMode ? cl.random_gen_dark : cl.random_gen_light}`}>
      <div className={cl.random_gen_result}> {genInt}</div>
      <div className={cl.random_gen_cnt_input}>
        <div className={cl.random_gen_desc_input}>от:</div>
        <input
          value={minGen}
          onChange={e => {
            const inputNumber = Number(e.target.value.replace(/\D/, ''));
            dispatch(randomizerActionsSetMin(inputNumber));
          }}
          className={cl.random_gen_input}
        />
        <div className={cl.random_gen_desc_input}>до:</div>
        <input
          value={maxGen}
          onChange={e => {
            const inputNumber = Number(e.target.value.replace(/\D/, ''));
            dispatch(randomizerActionsSetMax(inputNumber));
          }}
          className={cl.random_gen_input}
        />
      </div>

      <Button
        variant='contained'
        color={`${colorMode ? 'secondary' : 'primary'}`}
        className={cl.button_gen}
        onClick={generate}
      >
        Cгенерировать
      </Button>
    </div>
  );
}

export default Randomizer;
