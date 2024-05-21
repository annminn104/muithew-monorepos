'use client';

import { useEffect, useRef } from 'react';
import * as S from './styles';

type MouseBlobProps = {
  children?: React.ReactNode;
  radius?: number;
  borderWidth?: number;
};

const MouseBlob: React.FC<MouseBlobProps> = ({ children, radius, borderWidth }) => {
  const allCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!allCardsRef.current) return;

    const allCards = allCardsRef.current.querySelectorAll('.mouse-blob-container');
    console.log(allCards);

    const handleMouseMove = (ev) => {
      allCards.forEach((e) => {
        const blob = e.querySelector<HTMLDivElement>('.animate-blob');
        const fakeBlob = e.querySelector<HTMLDivElement>('.animate-fake-blob');

        console.log('blob', blob);

        const rec = fakeBlob.getBoundingClientRect();

        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2}px, ${ev.clientY - rec.top - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        );
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <S.MouseBlobWrap ref={allCardsRef} radius={radius} borderWidth={borderWidth}>
      <S.MouseBlobContainer className='mouse-blob-container' radius={radius}>
        {children}
        <S.MouseBlobBlob className='animate-blob'></S.MouseBlobBlob>
        <S.MouseBlobFakeBlob className='animate-fake-blob'></S.MouseBlobFakeBlob>
      </S.MouseBlobContainer>
    </S.MouseBlobWrap>
  );
};

export default MouseBlob;
