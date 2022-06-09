import React, { useEffect, useState } from 'react'
import { opponentStats, playerStats } from '../shared/characters';
import BattleAnnouncer from '../BattleAnnouncer/BattleAnnouncer';
import BattleMenu from '../BattleMenu/BattleMenu';
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import './battle.css'
import { useBattleSequence } from '../BattleAnnouncer/useBattleSequence';
import { useAiOpponent } from '../BattleAnnouncer/useAiOpponent'
import { wait } from '../shared/helpers';
import logo from '../../assets/dragonballlogo.png'
const Battle = ({ onGameEnd }) => {

    const [sequence, setSequence] = useState({});
    const {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        playerAnimation,
        opponentAnimation,
        announcerMessage,
    } = useBattleSequence(sequence);
    const aiChoice = useAiOpponent(turn);

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice });
        }
    }, [turn, aiChoice, inSequence])

    useEffect(() => {
        if (playerHealth == 0 || opponentHealth === 0) {
            (async () => {
                await wait(1000);
                onGameEnd(playerHealth === 0 ? opponentStats : playerStats)
            })();
        }
    }, [playerHealth, opponentHealth, onGameEnd])
    return (
        <>
            <div className='opponent'>
                <div className='summary'>
                    <PlayerSummary
                        health={opponentHealth}
                        name={opponentStats.name}
                        level={opponentStats.level}
                        maxHealth={opponentStats.maxHealth}
                    />
                </div>
            </div>
            <div className='characters'>
                <div className='gameHeader'>
                    <img className='gameHeader' src={logo} />
                </div>

                <div className='gameImages'>
                    <div className='playerSprite'>
                        <img
                            src={playerStats.img}
                            alt={playerStats.name}
                            className={[playerAnimation]}
                        />
                    </div>
                    <div className='opponentSprite'>
                        <img
                            src={opponentStats.img}
                            alt={opponentStats.name}
                            className={[opponentAnimation]}
                        />
                    </div>
                </div>
            </div>
            <div className='user'>
                <div className='summary'>
                    <PlayerSummary
                        main
                        health={playerHealth}
                        name={playerStats.name}
                        level={playerStats.level}
                        maxHealth={playerStats.maxHealth}
                    />
                </div>
            </div>
            <div className='hud'>
                <div className='hudChild'>
                    <BattleAnnouncer
                        message={
                            announcerMessage || `what will ${playerStats.name} do?`
                        } />

                </div>
                <div className='hudChild'>
                    <BattleMenu
                        turn={turn}
                        onAttack={() => setSequence({ turn, mode: 'attack' })}
                        onMagic={() => setSequence({ turn, mode: 'magic' })}
                        onHeal={() => setSequence({ turn, mode: 'heal' })}
                    />
                </div>
            </div>

        </>
    )
}
export default Battle