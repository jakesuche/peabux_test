import React, { useEffect, useRef } from 'react';

import {
  TabControllerBody,
  TabControllerNavigation,
  TabControllerNavigationButton,
  TabControllerNavigationButtonGroup
} from './index.styled';

export interface TabControllerProps {
  activeColor?: string;
  textColor?: string;
  activeBorderWidth?: string;
  setActiveTab: (value: tabItem) => void;
  activeTab: tabItem;
  tabs: {
    key: string;
  }[];
}

type tabItem = {
  key: string;
};

const TabController = (props: TabControllerProps): JSX.Element => {
  const { tabs, activeColor, textColor, activeBorderWidth, setActiveTab, activeTab } = props;

  const activeTabRef = useRef<HTMLButtonElement | null>(null);

  // Function to scroll to the active tab
  const scrollActiveTabIntoView = () => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (e: tabItem) => {
    setActiveTab(e);
  };

  useEffect(() => {
    scrollActiveTabIntoView();
  }, [activeTab]);

  return (
    <>
      {tabs.length ? (
        <TabControllerNavigation>
          <TabControllerNavigationButtonGroup>
            {tabs.map((e, i) => (
              <TabControllerNavigationButton
                type="button"
                active={activeTab?.key === e.key}
                activeColor={activeColor}
                textColor={textColor}
                activeBorderWidth={activeBorderWidth}
                key={i}
                ref={(ref) => {
                  if (activeTab?.key === e.key) {
                    activeTabRef.current = ref; // Assign the ref for the active tab
                  }
                }}
                onClick={() => handleClick(e)}>
                {e.key}
              </TabControllerNavigationButton>
            ))}
          </TabControllerNavigationButtonGroup>
        </TabControllerNavigation>
      ) : null}
      {/* {activeTab && <TabControllerBody>{activeTab.component}</TabControllerBody>} */}
    </>
  );
};

export default TabController;

type Iprops = {
  value: string;
  whenActive: string;
  children: React.ReactNode;
};

export const TabsBody = ({ children, value, whenActive }: Iprops) => {
  return <TabControllerBody>{value === whenActive && children}</TabControllerBody>;
};
