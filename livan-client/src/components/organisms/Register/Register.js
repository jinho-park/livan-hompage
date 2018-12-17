import React from 'react';
import styles from './Register.scss';
import { Button, Modal, InputError } from 'components';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Register = ({
    onLogin,
    onChangeInput,
    visible,
    error,
    onRegister,
    onClose,
    onKeyPress,
    forms
}) => {
    const {
        email,
        password,
        password2,
        nickname
    } = forms.toJS();

    const {
        email : emailError,
        password : passwordError,
        nickname : nicknameError
    } = error ? error.toJS() : {};

    return(
        <Modal visible={visible} mobileFullscreen>
            <div className={cx('register')}>
                <div className={cx('close')} onClick={onClose}>✕</div>
                <div className={cx('content')}>
                    <h3>회원 가입</h3>
                    <form>
                        <div className={cx('group')}>
                            <input type="text" name="email" onChange={onChangeInput} value={email}/>
                            <span className={cx('highlight')}></span>
                            <span className={cx('bar')}></span>
                            <label>Email</label>
                        </div>
                    </form>
                    <InputError error={emailError}/>
                    <form>
                        <div className={cx('group')}>
                            <input type="password" name="password" onChange={onChangeInput} value={password}/>
                            <span className={cx('highlight')}></span>
                            <span className={cx('bar')}></span>
                            <label>Password</label>
                        </div>
                        <div className={cx('group')}>
                            <input type="password" name="password2" onChange={onChangeInput} value={password2}/>
                            <span className={cx('highlight')}></span>
                            <span className={cx('bar')}></span>
                            <label>Password Confirm</label>
                        </div>
                    </form>
                    <InputError error={passwordError}/>
                    <form>
                        <div className={cx('group')}>
                            <input type="text" name="nickname" onChange={onChangeInput} value={nickname} onKeyPress={onKeyPress}/>
                            <span className={cx('highlight')}></span>
                            <span className={cx('bar')}></span>
                            <label>NickName</label>
                        </div>
                    </form>
                    <InputError error={nicknameError}/>
                    <div className={cx('register-foot')}>
                        <div className={cx('login')}>
                            <Button flex flat onClick={onLogin}>로그인</Button>
                        </div>
                        <div className={cx('regist')}>
                            <Button flex flat onClick={onRegister}>가입하기</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Register;