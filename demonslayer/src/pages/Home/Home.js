import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InosukeHashibira from "../../components/Characters/InosukeHashibira";
import ZenitsuAgatsuma from "../../components/Characters/ZenitsuAgatsuma";
import ShinjuroRengoku from "../../components/Characters/ShinjuroRengoku";
import TanjiroKamado from "../../components/Characters/TanjiroKamado";
import GiyuTomioka from "../../components/Characters/GiyuTomioka";
import NezukoKamado from "../../components/Characters/NezukoKamado";
import GyomeiHimejima from "../../components/Characters/GyomeiHimejima";
import TengenUzui from "../../components/Characters/TengenUzui";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        const items = gsap.utils.toArray('.item');

        let scrollTween = gsap.to(items, {
            xPercent: -100 * (items.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 0.5,
                snap: 1 / (items.length - 1),
                start: "top top",
                end: 3000,
            }
        });

        const logoFontSize = window.innerWidth < 477 ? '1.3rem' : '2rem';
        const logoTop = window.innerWidth < 477 ? '2rem' : '4rem';
    
        gsap.to('.logo', {
            fontSize: logoFontSize,
            top: logoTop,
            scrollTrigger: {
                trigger: '.logo',
                start: 'top top',
                end: '+=150',
                scrub: 0.5,
            }
        });

        const character = document.querySelectorAll('.character')

        character.forEach(el => {
            gsap.to(el.querySelector('.techniques'), {
                x: 0,
                y: 0,
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector('.techniques'),
                    start: 'top bottom',
                    end: '+=1000',
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector('.quote'), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector('.quote'),
                    start: 'top bottom',
                    end: '+=20%',
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector('.fullname'), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector('.fullname'),
                    start: 'top bottom',
                    end: '+=10%',
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector('img'), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector('img'),
                    start: 'top bottom',
                    end: '+=50%',
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector('.huge-text'), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector('.huge-text'),
                    start: 'top bottom',
                    end: '+=100%',
                    scrub: 0.5,
                }
            })

        })

    }, []);

    const characters = [
        <TanjiroKamado />,
        <ZenitsuAgatsuma />,
        <InosukeHashibira />,
        <NezukoKamado />,
        <GiyuTomioka />,
        <ShinjuroRengoku />,
        <GyomeiHimejima />,
        <TengenUzui />
    ]

    return (
        <>
            <div className="container">
                <div class="logo">
                    <h1>Demon<br /><span>Slayer</span></h1>
                </div>
                <div className="content">
                    <div className="frame">
                        <div className="item">
                        </div>
                        {characters.map((characters) => {
                            return <section className="item character">
                                {characters}
                            </section>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home