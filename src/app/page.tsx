import Advanced from "@/components/AdvancedStatis";
import AllInOneBank from "@/components/AllInOneBank";
import Banking from "@/components/Banking";
import Choose from "@/components/Choose";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import ManageCard from "@/components/ManageCard";
import Savings from "@/components/SavingAccount";
import Transactions from "@/components/Transactions";

export default function Home() {
  return (
    <>
      <Hero />
      <Transactions />
      <ManageCard />
      <Advanced />
      <Savings />
      <AllInOneBank />
      <Choose />
      <Banking />
      <Help />
    </>
  );
}
