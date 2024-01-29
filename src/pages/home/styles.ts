import styled from 'styled-components';

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-auto-rows: 280px;
  gap: 16px;
`;

export const PostHeaderStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const PostHeaderAvatarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostHeaderUserDetailsStyled = styled.div`
  flex-grow: 1;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

export const AvatarStyled = styled.img`
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
`;

export const PostActionButtonStyled = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 50%;
  background-color: transparent;
  &:hover {
    background-color: white;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const DialogStyled = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9999;
  position: fixed;
  align-items: center;
  background: #807c7c59;
  justify-content: center;
`;

export const DialogContentStyled = styled.div`
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 20px 2px;
`;

export const DialogHeaderStyles = styled.h3``;

export const DialogDividerStyled = styled.hr`
  margin: 10px 0;
`;

export const DialogBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DialogButtonStyled = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
  &:hover {
    color: white;
    background-color: #36a4f1;
    border-color: transparent;
  }
`;

export const PostTitleStyled = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  white-space: nowrap;
  max-width: 300px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostDescriptionStyled = styled.p`
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 6;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

export const InputStyled = styled.input`
  padding: 5px;
  width: 300px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid grey;
`;

export const TextareaStyled = styled.textarea`
  padding: 5px;
  width: 300px;
  resize: none;
  height: 200px;
  border-radius: 4px;
  border: 1px solid grey;
`;
