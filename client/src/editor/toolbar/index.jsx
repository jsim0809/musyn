import React from 'react';
import styled from 'styled-components';
import NoteDurations from './noteDurations';
import UndoButton from './buttons/undo';
import PlayButton from './buttons/play';
import Tempo from './tempo';

const Toolbar = () => (
  <Wrapper className="box toolbar">
    <UndoButton />
    <CompositionLabel>
      Untitled composition
    </CompositionLabel>
    <RightTools>
      <NoteDurations />
      <Spacer />
      <PlaybackWrapper>
        <Tempo />
        <PlayButton />
      </PlaybackWrapper>
    </RightTools>
  </Wrapper>
);

const CompositionLabel = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.25em;
`;

const RightTools = styled.div`
  display: flex;
  align-items: right;
`;

const PlaybackWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.25em;
  margin: 0!important;
`;

const Spacer = styled.div`
  width: 1em;
`;

export default Toolbar;
