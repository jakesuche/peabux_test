
import { useState } from 'react'
import { Container } from 'ui/atoms/Container'
import { GridContainer, GridItem } from 'ui/atoms/Grid'
import Stack from 'ui/atoms/Stack'
import { Typography } from 'ui/atoms/Typography'
import TabController,{TabsBody} from 'ui/components/TabController'
import Layout from 'ui/widgets/Layout'
import { StudentTable, TeachersTable } from 'ui/widgets/UserTables'



const tabs = [{
  key:'Teachers'
},
{
  key:'Students'
}]


export default function Home() {

  const [activeTab, setActiveTab] = useState(tabs[0]);


  return (
    <Layout>
      <Container>
        <GridContainer>
          <GridItem md={12}>
            <TabController
              setActiveTab={(e) => {
                setActiveTab(e);
              }}
              tabs={tabs}
              activeTab={activeTab}
            />
          </GridItem>

          <GridItem md={12}>
            <TabsBody value={activeTab.key} whenActive="Teachers">
              <Stack>
                <Typography variant="h3">Teachers</Typography>
                <TeachersTable />
              </Stack>
            </TabsBody>
            <TabsBody value={activeTab.key} whenActive="Students">
              <Stack>
                <Typography variant="h3">Students</Typography>
                <StudentTable />
              </Stack>
            </TabsBody>
          </GridItem>
        </GridContainer>
      </Container>
    </Layout>
  );
}
