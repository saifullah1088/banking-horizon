import HeaderBox from "@/components/HeaderBox";
import { getLoggedInUser } from "@/lib/actions/actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import React from "react";

const TransactionHistory = async ({
  searchParams: { id, page },
}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn?.$id });

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  return (
    <section className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions"
        />
      </div>
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {account?.data.name}
              <p className="text-14 text-blue-25">
                {account?.data.officialName}
              </p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
