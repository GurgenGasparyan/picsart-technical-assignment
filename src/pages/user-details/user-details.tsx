import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useUserDetails } from '../../hooks';
import { Card, CardContent, CardHeader, Avatar, Loader } from '../../components';

import {
  UserDetailsHeaderStyled,
  UserDetailsWrapperStyled,
  UserDetailsHeaderLeftStyled,
  UserDetailsHeaderRightStyled,
  UserDetailContentSection,
  UserDetailContentSectionTitle,
  UserDetailContentSectionRow,
  UserDetailGoBackStyled,
} from './styles';
import { UserModel } from '../../models';

const UserDetails = () => {
  const { id } = useParams();
  const { fetchUserDetails, user, isLoading } = useUserDetails();

  useEffect(() => {
    if (id) {
      fetchUserDetails(id);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const { avatar, name, username, email, phone, address } = user as UserModel;

  return (
    <UserDetailsWrapperStyled>
      <UserDetailGoBackStyled>
        <Link to="/users">
          <IoMdArrowBack size={32} />
        </Link>
      </UserDetailGoBackStyled>
      <Card>
        <CardHeader>
          <UserDetailsHeaderStyled>
            <UserDetailsHeaderLeftStyled>
              <Avatar alt="avatar" src={avatar} width={120} height={120} />
            </UserDetailsHeaderLeftStyled>
            <UserDetailsHeaderRightStyled>
              <h1>{name}</h1>
              <h2>{username}</h2>
            </UserDetailsHeaderRightStyled>
          </UserDetailsHeaderStyled>
        </CardHeader>
        <CardContent>
          <UserDetailContentSection>
            <UserDetailContentSectionTitle>Contact details</UserDetailContentSectionTitle>
            <UserDetailContentSectionRow>
              <span>Email</span>
              <span>{email}</span>
            </UserDetailContentSectionRow>
            <UserDetailContentSectionRow>
              <span>Phone</span>
              <span>{phone}</span>
            </UserDetailContentSectionRow>
          </UserDetailContentSection>
          <UserDetailContentSection>
            <UserDetailContentSectionTitle>Address</UserDetailContentSectionTitle>
            <UserDetailContentSectionRow>
              <span>Street</span>
              <span>{address.street}</span>
            </UserDetailContentSectionRow>
            <UserDetailContentSectionRow>
              <span>City</span>
              <span>{address.city}</span>
            </UserDetailContentSectionRow>
            <UserDetailContentSectionRow>
              <span>Apt</span>
              <span>{address.suite}</span>
            </UserDetailContentSectionRow>
          </UserDetailContentSection>
        </CardContent>
      </Card>
    </UserDetailsWrapperStyled>
  );
};

export default UserDetails;
