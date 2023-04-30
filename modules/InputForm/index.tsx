import { FC, useState } from 'react';
import { stateType } from '../../pages/index';
import { TextArea, Select, Button } from '@components';
import clsx from 'clsx';

export interface InputFormProps {
  state: stateType;
  setState: (state: stateType) => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleProcess: () => void;
  handleGraph: () => void;
}

export const InputForm: FC<InputFormProps> = ({
  state,
  setState,
  handleChange,
  handleProcess,
  handleGraph,
}) => {
  const divClassName = 'flex flex-col w-full md:w-auto items-center justify-center';

  const { CSVFileContent, xAxis, yAxis, xAxisOptions, yAxisOptions } = state;

  const invalidAxis = xAxis === yAxis || xAxis === '' || yAxis === '';

  return (
    <section className="flex flex-col md:flex-row w-full md:justify-evenly md:p-10 space-y-8 md:space-y-0">
      <div className={divClassName}>
        <TextArea
          id="CSVFileContent"
          label={'CSV file content'}
          value={CSVFileContent}
          onChange={(e) => handleChange(e)}
          rows={3}
          resize="none"
          className="md:w-[300px] [&_textarea]:text-center [&_textarea]:!min-h-[162px] [&_textarea]:py-[50px] [&_textarea:focus]:!pl-[16px] [&_textarea:focus]:!pt-[49px] [&_textarea:focus]:mb-[-1px]"
        ></TextArea>

        <Button as="primary" className="mt-4" onClick={handleProcess} disabled={!CSVFileContent}>
          Process
        </Button>
      </div>

      <div className={clsx(divClassName, 'md:!justify-between space-y-4 md:space-y-0')}>
        <div className="w-full md:flex md:w-auto md:flex-col md:justify-evenly md:flex-1 space-y-4 md:space-y-0">
          <Select
            id="xAxis"
            options={xAxisOptions.filter((option) => option.value !== yAxis)}
            value={xAxis}
            onChange={(value) => setState({ ...state, xAxis: value })}
            placeholder="Select X AXIS"
            disabled={!xAxisOptions.length}
          />

          <Select
            id="yAxis"
            options={yAxisOptions.filter((option) => option.value !== xAxis)}
            value={yAxis}
            onChange={(value) => setState({ ...state, yAxis: value })}
            placeholder="Select Y AXIS"
            disabled={!yAxisOptions.length}
          />
        </div>

        <Button as="primary" className="mt-4" onClick={handleGraph} disabled={invalidAxis}>
          Apply
        </Button>
      </div>
    </section>
  );
};
