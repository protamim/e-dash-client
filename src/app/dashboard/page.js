import GetProducts from "@/utils/GetProducts";
import { Card, CardBody } from "@chakra-ui/react";
const Dashboard = async () => {
  const products = await GetProducts();
  return (
    <>
      <div>
        <h4 className="text-3xl font-semibold mb-7">Overview</h4>
        <Card size="sm">
          <CardBody>
            <h4 className="text-lg font-medium flex items-center gap-x-3">
              Total Products:{" "}
              <span className="text-3xl">{products.length}</span>
            </h4>
          </CardBody>
        </Card>
      </div>
      <div className="phone-auth-container hidden"></div>
    </>
  );
};

export default Dashboard;
