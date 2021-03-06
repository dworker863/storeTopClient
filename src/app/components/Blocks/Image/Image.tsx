import { ChangeEvent, FC, useState } from 'react';
import ButtonUpload from '../../Elements/ButtonUpload/ButtonUpload';
import {
  StyledImageBtnWrapper,
  StyledImage,
  StyledImageWrapper,
} from './StyledImage';
import Dropzone from 'react-dropzone';
import plusIcon from '../../../../assets/images/plus-icon.png';
import { IImage } from './IImage';
import Button from '../../Elements/Button/Button';

const Image: FC<IImage> = ({ mode, buttonMode, image, changeHandler }) => {
  const [userAvatarUrl, setUserAvatarUrl] = useState('');

  const handleChange = (e: ChangeEvent<any>) => {
    console.log(e.target.files[0]);

    changeHandler && changeHandler(e.target.files[0]);
    e.target.files && setUserAvatarUrl(URL.createObjectURL(e.target.files[0]));
    console.log(userAvatarUrl);
  };

  return (
    <StyledImageWrapper mode={mode}>
      <Dropzone
        disabled={(mode === 'good' || mode === 'profile') && true}
        onDrop={(acceptedFiles) => {
          changeHandler && changeHandler(acceptedFiles[0]);
          setUserAvatarUrl(URL.createObjectURL(acceptedFiles[0]));
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <>
            <StyledImage
              {...getRootProps()}
              onInput={() => {
                changeHandler && changeHandler(acceptedFiles[0]);
                setUserAvatarUrl(URL.createObjectURL(acceptedFiles[0]));
              }}
            >
              {userAvatarUrl === '' &&
                (!image || image.slice(-9) === 'undefined') && (
                  <img
                    src={plusIcon}
                    alt="Иконка знака плюс"
                    style={{ width: 40 }}
                  />
                )}
              {(userAvatarUrl !== '' ||
                (image && image.slice(-9) !== 'undefined')) && (
                <img
                  src={userAvatarUrl || image}
                  alt="Аватар"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </StyledImage>
            {(mode === 'edit' || mode === 'registration') && (
              <StyledImageBtnWrapper mode={buttonMode}>
                <ButtonUpload
                  {...getInputProps()}
                  changeHandler={handleChange}
                  mode={mode}
                />
                {(acceptedFiles[0] || userAvatarUrl) && (
                  <Button
                    {...getInputProps()}
                    text={'Х Удалить'}
                    clickHandler={() => {
                      acceptedFiles.length = 0;
                      changeHandler && changeHandler(null);
                      setUserAvatarUrl('');
                    }}
                  />
                )}
              </StyledImageBtnWrapper>
            )}
          </>
        )}
      </Dropzone>
    </StyledImageWrapper>
  );
};

export default Image;
