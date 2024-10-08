export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRolesStatuses = Record<UserRole, boolean>;

const RoleDescription: UserRolesStatuses = {
  [UserRole.admin]: true,
  [UserRole.editor]: false,
  [UserRole.guest]: true,
};

console.log(RoleDescription);
