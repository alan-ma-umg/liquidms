package gqlSchema

import (
)

type Resolver struct{}

var Schema = `
  schema {
    query: Query
    mutation: Mutation
  }

  # Query requests. Get fields.
  type Query {
    # Simple Health Check
    health(): HealthDetail
    # Get Session Details
    sessionDetail(): SessionDetail
    # Get Checkin Details
    checkinDetail(pin: String!): SessionDetail
    # Get Current User Details
    getUser(): UserDetail
    # Get Item By RefId
    getItem(lookup: ItemFilter!): ItemDetail
    # Get Items By Type
    getItems(lookup: ItemFilter!): [ItemDetail]
  }

  # Mutation requsts. Upsert fields
  type Mutation {
    # Get Session Details
    sessionDetail(): SessionDetail
    # Refresh Current User Details
    getUser(): UserDetail
    # Update CCBRecords
    updateCCB(params: UpdateType!): [ItemDetail]
  }

  type HealthDetail {
    status: String!
    uID: String!
    cID: String!
  }  

  # Session information
  type SessionDetail {
    # Session JWT token.
    sessionToken: String!
    # Application User ID
    userID: String!
    # User Status
    status: String!
    # Session Expiration timer in sec
    expiration: Int!
    # Checkin Session ID
    checkinID: String!
  }  
  
  # User information
  type UserDetail {
    # Application User ID
    id: String!
    # User ID
    uid: String!
    # User display name
    name: String!
    # User email address
    email: String!
    # User picture link
    pictureURL: String!
  }

  # Item Detail
  type ItemDetail {
    # Item ID
    id: String!
    # Item Parent ID
    parentId: String!
    # Item Type
    type: String!
    # Item Value
    value: String!
    # Item Color
    color: String!
    # Item Image
    image: String!
    # Item External ID    
    extID: String!
    # Item External URL
    extURL: String!
    # Item ExtSync
    extSync: String!
  }

  # Get Item Filter 
  input ItemFilter {
    id: String!
    type: String!
    parentId: String!
    idType: String!
  }

  # Update Airtable Input
  input UpdateType {
    ccbType: String!
    parentID: String!
  }
`

