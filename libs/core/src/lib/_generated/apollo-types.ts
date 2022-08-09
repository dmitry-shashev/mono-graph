export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CurrentRealTime = {
  __typename?: 'CurrentRealTime';
  charged: Scalars['Float'];
  consumption: Scalars['Float'];
  discharged: Scalars['Float'];
  export: Scalars['Float'];
  import: Scalars['Float'];
  production: Scalars['Float'];
};

export type HourlyEnergyProduction = {
  __typename?: 'HourlyEnergyProduction';
  hour: Scalars['Int'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getCurrentRealTime?: Maybe<CurrentRealTime>;
  getDailyEnergyProduction: Array<HourlyEnergyProduction>;
  getUser?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  status: UserStatus;
};

export type UserInput = {
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED'
}

export type CurrentRealTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentRealTimeQuery = { __typename?: 'Query', getCurrentRealTime?: { __typename?: 'CurrentRealTime', production: number, consumption: number, import: number, export: number, charged: number, discharged: number } | null };

export type DailyEnergyProductionQueryVariables = Exact<{ [key: string]: never; }>;


export type DailyEnergyProductionQuery = { __typename?: 'Query', getDailyEnergyProduction: Array<{ __typename?: 'HourlyEnergyProduction', hour: number, value: number }> };
