
import { useState } from 'react'
import { Button } from 'ui/atoms/Button'
import { Container } from 'ui/atoms/Container'
import { GridContainer, GridItem } from 'ui/atoms/Grid'
import Stack from 'ui/atoms/Stack'
import { Typography } from 'ui/atoms/Typography'
import SimpleModal from 'ui/components/Modal'
import TabController,{TabsBody} from 'ui/components/TabController'
import CreationForm from 'ui/widgets/CreationForm'
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
  const [show,setShow] = useState(false)

  const handleModal = () => {
    setShow(!show)
  } 

  return (
    <Layout>
      <Container>
        <GridContainer>
          <GridItem xs={12} md={12}>
            <TabController
              setActiveTab={(e) => {
                setActiveTab(e);
              }}
              tabs={tabs}
              activeTab={activeTab}
            />
          </GridItem>
          <GridItem xs={12} md={12}>
            <Button onClick={handleModal} bgColor="black" variant="solid">
              Create User
            </Button>
          </GridItem>

          <GridItem xs={12} md={12}>
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

        <SimpleModal onClose={handleModal} isOpen={show}>
          <CreationForm />
        </SimpleModal>
      </Container>
    </Layout>
  );
}
