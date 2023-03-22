import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Randomizer.module.css';
import {
  randomizerActionsSetMax,
  randomizerActionsSetMin,
  randomizerActionsSetResult,
} from '../../../store/actionsCreators/randomizerActionsCreater';

function Randomizer() {
  const dispatch = useDispatch();
  const genInt = useSelector(state => state.randomizer.genInt);
  const minGen = useSelector(state => state.randomizer.minGen);
  const maxGen = useSelector(state => state.randomizer.maxGen);

  const colorMode = useSelector(state => state.display.colorMode);

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
      <div className={cl.randomGen_result}> {genInt}</div>
      <div className={cl.randomGen_cntInput}>
        <div className={cl.randomGen_descInput}>от:</div>
        <input
          value={minGen}
          onChange={e => {
            const inputNumber = Number(e.target.value.replace(/\D/, ''));
            dispatch(randomizerActionsSetMin(inputNumber));
          }}
          className={cl.randomGen_input}
        />
        <div className={cl.randomGen_descInput}>до:</div>
        <input
          value={maxGen}
          onChange={e => {
            const inputNumber = Number(e.target.value.replace(/\D/, ''));
            dispatch(randomizerActionsSetMax(inputNumber));
          }}
          className={cl.randomGen_input}
        />
      </div>

      <Button variant='contained' color='secondary' className={cl.button_gen} onClick={generate}>
        Cгенерировать
      </Button>
    </div>
  );
}

export default Randomizer;
