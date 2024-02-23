'use client'
import { createContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export const UserRoleContext = createContext();

export const UserRoleContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const { status, data = {} } = useSession();
  const { user } = data || {};

  useEffect(() => {
    const fetchRole = async () => {
      if (status === 'authenticated') {
        try {
          const res = await fetch(`/api/userRole?email=${user?.email}`);
          const data = await res.json();
          setRole(data.role);
        } catch (err) {
        }
      }
    };

    fetchRole();
  }, [status, user]);

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};